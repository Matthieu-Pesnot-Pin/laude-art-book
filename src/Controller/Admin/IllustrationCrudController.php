<?php

namespace App\Controller\Admin;

use App\Entity\Illustration;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\AssociationField;
use EasyCorp\Bundle\EasyAdminBundle\Field\ImageField;

class IllustrationCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Illustration::class;
    }

    public function configureFields(string $pageName): iterable
    {
        return [
            TextField::new('name'),
            ImageField::new('imageFile')
                ->setBasePath("/uploads")
                ->setUploadDir("/public/uploads")
                ->setUploadedFileNamePattern("[randomhash].[extension]")
                ->setRequired(false),
            AssociationField::new('category')
        ];
    }
}
