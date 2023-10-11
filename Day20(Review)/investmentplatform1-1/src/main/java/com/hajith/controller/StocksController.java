package com.hajith.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hajith.constant.Api;
import com.hajith.dto.request.StocksRequest;
import com.hajith.dto.response.CountResponse;
import com.hajith.services.StocksService;
import com.hajith.dto.response.StocksResponse;

import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping(Api.PRODUCT)
@RequiredArgsConstructor
@Tag(name = "Product")
public class StocksController {

    private final StocksService stocksService;

    @PostMapping("/add")
    public ResponseEntity<String> saveProduct(@RequestBody StocksRequest request) {
        boolean isSaved = stocksService.saveProduct(request);
        return isSaved ? ResponseEntity.status(201).body("Product added successfully!")
                : ResponseEntity.badRequest().build();
    }

    @GetMapping("/get")
    public ResponseEntity<List<StocksResponse>> getAllProducts() {
        List<StocksResponse> productList = stocksService.getAllProducts();
        return !productList.isEmpty() ? ResponseEntity.status(200).body(productList)
                : ResponseEntity.noContent().build();
    }

    @GetMapping("/getCount")
    public ResponseEntity<CountResponse> productCount() {
        CountResponse countResponse = stocksService.productCount();
        return countResponse.getCount() != 0 ? ResponseEntity.ok().body(countResponse)
                : ResponseEntity.noContent().build();
    }

    @GetMapping("/find/{pid}")
    public ResponseEntity<StocksResponse> getProduct(@PathVariable Long pid) {
        StocksResponse productResponse = stocksService.getProduct(pid);
        return productResponse != null ? ResponseEntity.ok().body(productResponse) : ResponseEntity.notFound().build();
    }

    @PutMapping("/edit/{pid}")
    public ResponseEntity<StocksResponse> updateProduct(@RequestBody StocksRequest request, @PathVariable Long pid) {
        StocksResponse productResponse = stocksService.updateProduct(request, pid);
        return productResponse != null ? ResponseEntity.ok().body(productResponse) : ResponseEntity.notFound().build();
    }

    @DeleteMapping("/delete/{pid}")
    public ResponseEntity<String> deleteProduct(@PathVariable Long pid) {
        boolean isDeleted = stocksService.deleteProduct(pid);
        return isDeleted ? ResponseEntity.ok().body("Product deleted successfully!")
                : ResponseEntity.notFound().build();
    }

}
