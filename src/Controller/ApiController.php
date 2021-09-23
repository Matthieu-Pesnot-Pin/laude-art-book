<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class ApiController extends AbstractController
{
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

        $success = @file_put_contents("assets/system/dispositionAccueil.json", json_encode($post->disposition), JSON_PRETTY_PRINT);
        $output = $success == true
            ? ["success" => "Configuration saved"]
            : ["error" => "Error while writing configuration file"];
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
