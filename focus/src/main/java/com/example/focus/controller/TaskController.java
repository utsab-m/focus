package com.example.focus.controller;

import com.example.focus.dto.TaskDto;
import com.example.focus.model.Task;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.example.focus.service.TaskService;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/api/tasks")
public class TaskController {
    @Autowired
    private TaskService taskService;

    @GetMapping
    // http://localhost:5000/api/tasks/
    public ResponseEntity<List<TaskDto>> getAllTasks() {
        List<TaskDto> tasks = taskService.getAllTasks();
        return new ResponseEntity<>(tasks, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    // http://localhost:5000/api/tasks/{id}
    public ResponseEntity<TaskDto> getTaskById(@PathVariable Long id) {
        TaskDto taskDto = taskService.getTaskById(id);
        return new ResponseEntity<>(taskDto, HttpStatus.OK);
    }

    @PostMapping
    // http://localhost:3000/api/tasks
    public ResponseEntity<TaskDto> createTask(@RequestBody Task task) {
        TaskDto savedTaskDto = taskService.createTask(task);
        return new ResponseEntity<>(savedTaskDto, HttpStatus.CREATED);
    }

    @PatchMapping("/{id}")
    // http://localhost:3000/api/tasks/{id}
    public ResponseEntity<TaskDto> updateTask(@PathVariable Long id, @RequestBody Task task) {
        TaskDto taskDto = taskService.updateTask(id, task);
        return new ResponseEntity<>(taskDto, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    // http://localhost:3000/api/tasks/{id}
    public ResponseEntity<TaskDto> deleteTask(@PathVariable Long id) {
        TaskDto taskDto = taskService.deleteTask(id);
        return new ResponseEntity<>(taskDto, HttpStatus.OK);
    }
}
