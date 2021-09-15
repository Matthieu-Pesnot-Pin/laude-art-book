<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class HomeController extends AbstractController
{
    /**
     * @Route("/", name="home")
     */
    public function index(): Response
    {
        return $this->render('home/index.html.twig', [
            'listeImage' => [
                ["img" => "images-1.jpg", "infos" => "Couverture la petite échassière"],
                ["img" => "images-2.jpg", "infos" => "Diptyque oiseaux"],
                ["img" => "images-3.jpg", "infos" => "Pitichat deviendra grand"],
                ["img" => "images-4.jpg", "infos" => "Piti renard"],
            ],
        ]);
    }
}
