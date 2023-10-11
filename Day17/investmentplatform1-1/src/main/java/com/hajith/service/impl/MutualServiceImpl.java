//package com.hajith.service.impl;
//
//import java.util.List;
//import java.util.stream.Collectors;
//
//import org.springframework.stereotype.Service;
//
//import com.hajith.dto.request.MutualRequest;
//import com.hajith.dto.response.CountResponse;
//import com.hajith.dto.response.MutualResponse;
//import com.hajith.model.Mutual;
//import com.hajith.repository.MutualRepository;
//
//import jakarta.persistence.EntityNotFoundException;
//import jakarta.transaction.Transactional;
//import lombok.RequiredArgsConstructor;
//
//@Service
//@Transactional
//@RequiredArgsConstructor
//public class MutualServiceImpl implements MutualService {
//
//    private final MutualRepository productRepository;
////    private final CategoryRepository categoryRepository;
//
//    @Override
//    public boolean saveroduct(MutualRequest request) {
//        if (productRepository.findByProductName(request.getMutualName()).isPresent()) {
//            return false;
//        }
//
//        Mutual product = Mutual.builder()
//                .mutualName(request.getMutualName())
//                .mutualPrice(request.getMutualPrice())
//                .mutualDesc(request.getMutualDesc())
//                .mutualImage(request.getMutualImage())
////                .category(categoryRepository.findByCid(request.getCid()))
//                .build();
//
//        productRepository.save(product);
//        return true;
//    }
//
//    @Override
//    public List<MutualResponse> getAllroducts() {
//        List<Mutual> productList = productRepository.findAll();
//
//        return productList.stream()
//                .map(this::mapProductToResponse)
//                .collect(Collectors.toList());
//    }
//
//    @Override
//    public MutualResponse getroduct(Long mid) {
//        Mutual product = productRepository.findByMid(mid);
//        return mapProductToResponse(product);
//    }
//
//    @Override
//    public MutualResponse updateroduct (MutualRequest request, Long mid) {
//        Mutual product = productRepository.findByMid(mid);
//
//        if (product != null) {
//            product.setMutualName(request.getMutualName());
//            product.setMutualPrice(request.getMutualPrice());
//            product.setMutualDesc(request.getMutualDesc());
//            product.setMutualImage(request.getMutualImage());
//            productRepository.save(product);
//
//            return mapProductToResponse(product);
//        } else {
//            throw new EntityNotFoundException("Product with pid " + mid + " not found");
//        }
//    }
//
//    @Override
//    public boolean deleteroduct (Long mid) {
//        Mutual product = productRepository.findByMid(mid);
//
//        if (product != null) {
//            productRepository.deleteByMid(mid);
//            return true;
//        } else {
//            return false;
//        }
//    }
//
//    private MutualResponse mapProductToResponse(Mutual product) {
//        return MutualResponse.builder()
//                .mid(product.getMid())
//                .mutualName(product.getMutualName())
//                .mutualPrice(product.getMutualPrice())
//                .mutualDesc(product.getMutualDesc())
//                .mutualStatus(product.getMutualStatus())
//                .mutualImage(product.getMutualImage())
//                .build();
//    }
//
//    @Override
//    public Mutual getroductModelId(Long mid) {
//        return productRepository.findByMid(mid);
//    }
//
//    @Override
//    public CountResponse productCount() {
//        long count = productRepository.count();
//        return CountResponse.builder().count(count).build();
//    }
//}
