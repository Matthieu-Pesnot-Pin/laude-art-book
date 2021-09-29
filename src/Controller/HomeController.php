<?php

namespace App\Controller;

use App\Entity\Category;
use App\Entity\Illustration;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class HomeController extends AbstractController
{
    protected $entityManager;

    public function __construct(EntityManagerInterface $entityManager)
    {
        $this->entityManager = $entityManager;
    }


    /**
     * @Route("/", name="home")
     */
    public function index(): Response
    {
        $categoryMapNameId = $this->entityManager->getRepository(Category::class)->findAllForReact();
        // $listeSections = $this->entityManager->getRepository(Illustration::class)->findAllForReact();
        // $output = [];
        // foreach ($listeSections as $section => $listeImages) {
        //     $listeFinale = [];
        //     foreach ($listeImages as $index => $image) {
        //         $listeFinale[$index % 3][floor($index / 3)] = $image;
        //     }
        //     $output[$section] = $listeFinale;
        // }

        $infosDisposition = @file_get_contents("assets/system/dispositionAccueil.json");

        if ($infosDisposition) {
            $infosDisposition = json_decode($infosDisposition);
            $listeSections = $this->entityManager->getRepository(Illustration::class)->findAll();
            $listeImagesFichierJson = [];
            foreach ($infosDisposition as $sectionId => $listeImages) {
                foreach ($listeImages as $index => $image) {
                    $listeImagesFichierJson[] = $image;
                }
            }
            // if (count($listeImagesFichierJson) != count())

        } else {
            $listeSections = $this->entityManager->getRepository(Illustration::class)->findAllForReact();
            $infosDisposition = [];
            foreach ($listeSections as $sectionId => $listeImages) {
                $listeFinale = [];
                foreach ($listeImages as $index => $image) {
                    $listeFinale[$index % 3][floor($index / 3)] = $image;
                }
                while (count($listeFinale) < 3) array_push($listeFinale, []);
                $infosDisposition[$sectionId] = $listeFinale;
            }
        }

        return $this->render('home/index.html.twig', [
            "reactRoute" => "book",
            'dataFromController' => [
                "listeImages" => $infosDisposition,
                "categoryMap" => $categoryMapNameId,
            ],
        ]);
    }
}
