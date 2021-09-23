<?php

namespace App\Controller;

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
        $listeSections = $this->entityManager->getRepository(Illustration::class)->findAllForReact();
        $output = [];
        foreach ($listeSections as $section => $listeImages) {
            $listeFinale = [];
            foreach ($listeImages as $index => $image) {
                $listeFinale[$index % 3][floor($index / 3)] = $image;
            }
            $output[$section] = $listeFinale;
        }

        $infosDisposition = @file_get_contents("assets/system/dispositionAccueil.json");
        $success = null;

        if ($infosDisposition === false) {
            $success = false;
        } else {
            $success = true;
            $infosDisposition = json_decode($infosDisposition);
        }

        return $this->render('home/index.html.twig', [
            "reactRoute" => "book",
            'dataFromController' => [
                "listeImages" => $infosDisposition
            ],
        ]);
    }
}
