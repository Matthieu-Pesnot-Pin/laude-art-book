<?php

namespace App\Controller;

use App\Entity\Page;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class PageController extends AbstractController
{
    protected $entityManager;

    public function __construct(EntityManagerInterface $entityManager)
    {
        $this->entityManager = $entityManager;
    }


    #[Route('/page/{pageUrl}', name: 'page')]
    public function index($pageUrl): Response
    {
        $page = $this->entityManager->getRepository(Page::class)->findOneBy(["url" => $pageUrl]);
        // dd($page);
        return $this->render('page/index.html.twig', [
            "reactRoute" => "/page/" . $page->getName(),
            "dataFromController" => [
                "pageName" => $page->getName(),
            ]
        ]);
    }
}
