package com.hajith.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class MutualResponse {
    private Long mid;
    private String mutualName;
    private float mutualPrice;
    private float mutualStatus;
    private String mutualImage;
    private String mutualDesc;
}
