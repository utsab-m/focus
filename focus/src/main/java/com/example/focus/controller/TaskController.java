package com.example.focus.controller;

import com.example.focus.dto.TaskDto;
import lombok.AllArgsConstructor;
import com.example.focus.mapper.TaskMapper;
import com.example.focus.model.Task;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.example.focus.service.TaskService;

import java.util.List;

@RestController
public class TaskController {
    @Autowired
    private TaskService taskService;

    @GetMapping
    // http://localhost:5000/tasks/
    public ResponseEntity<List<TaskDto>> getAllTasks() {
        List<TaskDto> tasks = taskService.getAllTasks();
        return new ResponseEntity<>(tasks, HttpStatus.OK);
    }

    @PutMapping
    // http://localhost:3000/tasks
    public ResponseEntity<TaskDto> createTask(@RequestBody Task task) {
        Task savedTask = taskService.createTask(task);
        TaskDto savedTaskDto = TaskMapper.toDto(savedTask);
        return new ResponseEntity<>(savedTaskDto, HttpStatus.CREATED);
    }

//    @GetMapping
//
//    @PatchMapping
//
//    @PostMapping
//
//    @DeleteMapping
}
