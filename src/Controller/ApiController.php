<?php

namespace App\Controller;

use App\Entity\Category;
use App\Entity\Illustration;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class ApiController extends AbstractController
{
    protected $entityManager;

    public function __construct(EntityManagerInterface $entityManager)
    {
        $this->entityManager = $entityManager;
    }


    #[Route('/api', name: 'api')]
    public function index(Request $request): Response
    {
        $post = json_decode($request->getContent());
        try {
            $tmp = $post->type;
            $tmp = $post->disposition;
        } catch (\Exception $e) {
            return $this->json([
                "error" => "Error found in sent data.",
            ]);
        }

        $errorMessage = null;
        try {
            $success = file_put_contents("assets/system/dispositionAccueil.json", json_encode($post->disposition), JSON_PRETTY_PRINT);
            //code...
        } catch (\Throwable $th) {
            $errorMessage = $th->getMessage();
            //throw $th;
        }
        // return $this->json($post);
        foreach ($post->disposition as $indexSection => $section) {
            foreach ($section as $indexColumm => $column) {
                foreach ($column as $indexRow => $imagePost) {

                    $image = $this->entityManager->getRepository(Illustration::class)->findOneBy(['id' => $imagePost->id]);
                    $newCategory = $this->entityManager->getRepository(Category::class)->findOneBy(['id' => $imagePost->category]);
                    // $image = $this->entityManager->getRepository(Category::class)->findAll();
                    // die($image->getName());
                    // return $this->  json($image);
                    $image->setName($imagePost->name);
                    $image->setImageFile($imagePost->imageFile);
                    $image->setCategory($newCategory);
                    $this->entityManager->flush();
                }
            }
        }
        $output = $success == true
            ? ["success" => "Configuration saved"]
            : ["error" => "Error while writing configuration file : " . $errorMessage];
        return $this->json($output);
    }

    #[Route('/api/set-category/{imageId}/{newCategoryId}', name: 'api_change_category')]
    public function changeCategory(Request $request, $imageId, $newCategoryId): Response
    {
        return $this->json([
            "imageId" => $imageId,
            "newCategory" => $newCategoryId,
        ]);
    }
}
