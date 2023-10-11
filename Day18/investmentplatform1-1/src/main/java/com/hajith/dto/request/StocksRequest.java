package com.hajith.dto.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class StocksRequest {
    private Long pid;
    private String productName;
    private float productPrice;
    private float productStatus;
    private String productImage;
    private String productDesc;
}
