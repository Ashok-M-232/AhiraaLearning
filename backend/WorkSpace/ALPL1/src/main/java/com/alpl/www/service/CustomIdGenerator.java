package com.alpl.www.service;

import java.io.Serializable;

import org.hibernate.engine.spi.SharedSessionContractImplementor;
import org.hibernate.id.IdentifierGenerator;

public class CustomIdGenerator implements IdentifierGenerator {
    /**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private static long counter = 1;  // Start counter at 1

    @Override
    public Serializable generate(SharedSessionContractImplementor session, Object object) {
        // Generate custom ID in the format "ALPL" + zero-padded counter (e.g., "ALPL001")
        String id = String.format("ALPL%03d", counter);
        counter++;
        return id;
    }
}
