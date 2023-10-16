package com.hajith.dto.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class MutualRequest {
    private Long mid;
    private String mutualName;
    private float mutualPrice;
    private float mutualStatus;
    private String mutualImage;
    private String mutualDesc;
}
