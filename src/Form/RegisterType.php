<?php

namespace App\Form;

use App\Entity\User;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\PasswordType;
use Symfony\Component\Form\Extension\Core\Type\RepeatedType;

class RegisterType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('email', EmailType::class, ['label' => "Entrez votre mail (qui servira ensuite d'identifiant)"])
            // ->add('roles')
            ->add('firstname', TextType::class, ['label' => "Entrez votre prénom"])
            ->add('lastname', TextType::class, ['label' => "Entrez votre nom"])
            ->add('password', RepeatedType::class, [
                "type" => PasswordType::class,
                'first_options' => [
                    "label" => "Mot de passe"
                ],
                'second_options' => [
                    "label" => "Confirmation mot de passe"

                ]
            ])->add("submit", SubmitType::class, ['label' => "Valider"]);
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => User::class,
        ]);
    }
}
