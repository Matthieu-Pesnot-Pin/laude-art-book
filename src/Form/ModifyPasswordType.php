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

class ModifyPasswordType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('email', EmailType::class, [
                "label" => 'Email',
                "disabled" => true
            ])
            ->add('firstname', TextType::class, [
                "label" => 'Prenom',
                "disabled" => true
            ])
            ->add('lastname', TextType::class, [
                "label" => 'Nom',
                "disabled" => true
            ])
            ->add('old_password', PasswordType::class, [
                "label" => 'Mot de passe actuel',
                "mapped" => false
            ])->add('new_password', RepeatedType::class, [
                "type" => PasswordType::class,
                "invalid_message" => "Le mot de passe et la confirmation sont différents",
                "required" => true,
                "mapped" => false,
                'first_options' => [
                    "label" => "Nouveau mot de passe"
                ],
                'second_options' => [
                    "label" => "Confirmation nouveau mot de passe"
                ]
            ])->add("submit", SubmitType::class, ['label' => "Modifier"]);
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => User::class,
        ]);
    }
}
