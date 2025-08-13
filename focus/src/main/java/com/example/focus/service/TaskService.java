package com.example.focus.service;

import com.example.focus.dto.TaskDto;
import com.example.focus.model.Task;

import java.util.List;

public interface TaskService {
    TaskDto createTask(Task task);
    List<TaskDto> getAllTasks();
    TaskDto
//    void updateTask(Task task);
//    void deleteTask(Task task);
}
