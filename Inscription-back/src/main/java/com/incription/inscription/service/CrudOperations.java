package com.incription.inscription.service;

import java.util.List;

public interface CrudOperations<T, I> {
    List<T> findAll();

    T  findById(I id);

    T deleteById(I id);

    T updateById(T toUpdate);

    T save(T toSave);
}
