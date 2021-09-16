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
        $listeImages = $this->entityManager->getRepository(Illustration::class)->findAll();
        return $this->render('home/index.html.twig', [
            'listeImages' => $listeImages,
        ]);
    }
}
