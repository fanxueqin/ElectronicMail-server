package com.solstice.bean;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;

import com.solstice.utils.Utils;

public class PhoneImpl implements ConstraintValidator<Phone, String> {

	
	@Override
	public void initialize(Phone annotation) {
	}

	@Override
	public boolean isValid(String value, ConstraintValidatorContext context) {
		return Utils.isPhone(value) ? true : false;
	}
}
