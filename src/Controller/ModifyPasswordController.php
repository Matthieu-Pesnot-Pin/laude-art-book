<?php

namespace App\Controller;

use App\Form\ModifyPasswordType;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

class ModifyPasswordController extends AbstractController
{
    protected $entityManager;

    public function __construct(EntityManagerInterface $entityManager)
    {
        $this->entityManager = $entityManager;
    }



    /**
     * @Route("/compte/modifier-mot-de-passe", name="modify_password")
     */
    public function index(Request $request, UserPasswordHasherInterface $encoder): Response
    {
        $user = $this->getUser();
        $form = $this->createForm(ModifyPasswordType::class, $user);
        $form->handleRequest($request);
        $notification = null;
        if ($form->isSubmitted() && $form->isValid()) {
            $old_password = $form->get('old_password')->getData();
            if ($encoder->isPasswordValid($user, $old_password)) {
                $new_password = $form->get('new_password')->getData();
                $new_password = $encoder->hashPassword($user, $new_password);
                $user->setPassword($new_password);
                // $this->entityManager->persist($user);
                $this->entityManager->flush();
                $notification = "Mot de passe mis à jour !";
            } else {
                $notification = "Le mot de passe actuel saisi n'est pas correct / le mot de passe n'a pa été mis à jour";
            }
        }
        $this->entityManager->persist($user);
        return $this->render('account/modify-password.html.twig', [
            "form" => $form->createView(),
            "notification" => $notification
        ]);
    }
}
