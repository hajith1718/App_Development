package com.hajith.service.impl;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.hajith.dto.request.StocksRequest;
import com.hajith.dto.response.CountResponse;
import com.hajith.dto.response.StocksResponse;
import com.hajith.model.Stocks;
//import com.hajith.repository.CategoryRepository;
import com.hajith.repository.StocksRepository;
import com.hajith.services.StocksService;

import jakarta.persistence.EntityNotFoundException;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;

@Service
@Transactional
@RequiredArgsConstructor
public class StocksServiceImpl implements StocksService {

    private final StocksRepository productRepository;
//    private final CategoryRepository categoryRepository;

    @Override
    public boolean saveProduct(StocksRequest request) {
        if (productRepository.findByProductName(request.getProductName()).isPresent()) {
            return false;
        }

        Stocks product = Stocks.builder()
                .productName(request.getProductName())
                .productPrice(request.getProductPrice())
                .productDesc(request.getProductDesc())
                .productImage(request.getProductImage())
//                .category(categoryRepository.findByCid(request.getCid()))
                .build();

        productRepository.save(product);
        return true;
    }

    @Override
    public List<StocksResponse> getAllProducts() {
        List<Stocks> productList = productRepository.findAll();

        return productList.stream()
                .map(this::mapProductToResponse)
                .collect(Collectors.toList());
    }

    @Override
    public StocksResponse getProduct(Long pid) {
        Stocks product = productRepository.findByPid(pid);
        return mapProductToResponse(product);
    }

    @Override
    public StocksResponse updateProduct(StocksRequest request, Long pid) {
        Stocks product = productRepository.findByPid(pid);

        if (product != null) {
            product.setProductName(request.getProductName());
            product.setProductPrice(request.getProductPrice());
            product.setProductDesc(request.getProductDesc());
            product.setProductImage(request.getProductImage());
            productRepository.save(product);

            return mapProductToResponse(product);
        } else {
            throw new EntityNotFoundException("Product with pid " + pid + " not found");
        }
    }

    @Override
    public boolean deleteProduct(Long pid) {
        Stocks product = productRepository.findByPid(pid);

        if (product != null) {
            productRepository.deleteByPid(pid);
            return true;
        } else {
            return false;
        }
    }

    private StocksResponse mapProductToResponse(Stocks product) {
        return StocksResponse.builder()
                .pid(product.getPid())
                .productName(product.getProductName())
                .productPrice(product.getProductPrice())
                .productDesc(product.getProductDesc())
                .productImage(product.getProductImage())
                .build();
    }

    @Override
    public Stocks getProductModelId(Long pid) {
        return productRepository.findByPid(pid);
    }

    @Override
    public CountResponse productCount() {
        long count = productRepository.count();
        return CountResponse.builder().count(count).build();
    }
}
