package com.woma;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.*;

@RestController
public class AirplaneController {

    Map<Integer, Airplane> airplanes = new HashMap<>();

    public AirplaneController() {
        createSomeData();
    }

    private void createSomeData() {
        Airplane airplane1 = new Airplane("N4567SW", "Dallas, Texas");
        airplanes.put(airplane1.getId(), airplane1);
        Airplane airplane2 = new Airplane("N567AC", "San Francisco, California");
        airplanes.put(airplane2.getId(), airplane2);
    }

    @RequestMapping("/airplanes")
    public List<Airplane> getPlanes(){
        return new ArrayList<>(airplanes.values());
    }


}
