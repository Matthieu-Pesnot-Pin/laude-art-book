<?php

namespace App\Repository;

use App\Entity\Category;
use App\Entity\Illustration;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\ORM\EntityManagerInterface;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Illustration|null find($id, $lockMode = null, $lockVersion = null)
 * @method Illustration|null findOneBy(array $criteria, array $orderBy = null)
 * @method Illustration[]    findAll()
 * @method Illustration[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class IllustrationRepository extends ServiceEntityRepository
{


    protected $entityManager;

    public function __construct(ManagerRegistry $registry, EntityManagerInterface $entityManager)
    {
        parent::__construct($registry, Illustration::class);
        $this->entityManager = $entityManager;
    }

    public function findAllForReact()
    {
        $categories = $this->entityManager->getRepository(Category::class)->findAll();
        $output = [];
        foreach ($categories as $category) {
            $output[$category->getId()] = array_map(function ($image) {
                return $image->reactBindOutput();
            }, $this->findBy(["category" => $category]));
        }
        return $output;
    }

    // /**
    //  * @return Illustration[] Returns an array of Illustration objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('i')
            ->andWhere('i.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('i.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?Illustration
    {
        return $this->createQueryBuilder('i')
            ->andWhere('i.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
