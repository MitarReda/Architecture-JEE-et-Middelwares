package com.example.jpbdcc;

import com.example.jpbdcc.entity.Product;
import com.example.jpbdcc.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.List;

@SpringBootApplication
public class JpBdccApplication implements CommandLineRunner {

    @Autowired
    private ProductRepository repository;
    public static void main(String[] args) {
        SpringApplication.run(JpBdccApplication.class, args);
    }

    @Override
    public void run(String... args) throws Exception {
        repository.save(new Product(null,"Pc",3522,3));
        repository.save(new Product(null,"Laptop",5522,6));
        repository.save(new Product(null,"SmartPhone",1522,20));
        List<Product> products = repository.findAll();

        products.forEach(p->{
            System.out.println(p.toString());
        });

        Product product=repository.findById(Long.valueOf(1)).get();
        System.out.println("*****************************");
        System.out.println(product.getId());
        System.out.println(product.getName());
        System.out.println(product.getPrice());
        System.out.println(product.getQuantity());
        System.out.println("*****************************");

        System.out.println("---------------------");
        List<Product> productList = repository.findByNameContains("c");
        productList.forEach(p->{
            System.out.println(p);
        });

        System.out.println("---------------------");
        List<Product> productList2 = repository.search("%C%");
        productList.forEach(p->{
            System.out.println(p);
        });
        System.out.println("---------------------");
        List<Product> productList3 = repository.findByPriceGreaterThan(3000);
        productList.forEach(p->{
            System.out.println(p);
        });
        System.out.println("---------------------");
        List<Product> productList4 = repository.searchByPrice(3000);
        productList.forEach(p->{
            System.out.println(p);
        });

    }
}
