package com.yjl.yuaicodemother.controller;


import com.yjl.yuaicodemother.common.BaseResponse;
import com.yjl.yuaicodemother.common.ResultUtils;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/health")
public class HealthController {

    @RequestMapping("/check")
    public BaseResponse<String> check() {
        return ResultUtils.success("ok");
    }
}
