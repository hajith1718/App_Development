package com.hajith.services;

import java.util.List;

import com.hajith.dto.request.StocksRequest;
import com.hajith.dto.response.CountResponse;
import com.hajith.dto.response.StocksResponse;
import com.hajith.model.Stocks;

public interface StocksService {

    boolean saveProduct(StocksRequest request);

    List<StocksResponse> getAllProducts();

    StocksResponse getProduct(Long pid);

    StocksResponse updateProduct(StocksRequest request, Long pid);

    boolean deleteProduct(Long pid);

    Stocks getProductModelId(Long pid);

    CountResponse productCount();

}
