<?php

namespace App\Controller\Admin;

use App\Entity\Category;
use App\Entity\Illustration;
use App\Entity\User;
use EasyCorp\Bundle\EasyAdminBundle\Config\Dashboard;
use EasyCorp\Bundle\EasyAdminBundle\Config\MenuItem;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractDashboardController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class DashboardController extends AbstractDashboardController
{
    /**
     * @Route("/admin", name="admin")
     */
    public function index(): Response
    {
        return parent::index();
    }

    public function configureDashboard(): Dashboard
    {
        return Dashboard::new()
            ->setTitle('Administration');
    }

    public function configureMenuItems(): iterable
    {
        yield MenuItem::linktoDashboard('Dashboard', 'fa fa-home');
        yield MenuItem::linktoCrud('Utilisateurs', 'fa fa-user', User::class);
        yield MenuItem::linktoCrud('Catégories', 'fa fa-list', Category::class);
        yield MenuItem::linktoCrud('Illustrations', 'fa fa-image', Illustration::class);
        // yield MenuItem::linktoCrud('Categories', 'fa fa-list', Category::class);
        // yield MenuItem::linkToCrud('The Label', 'fas fa-list', EntityClass::class);
    }
}
