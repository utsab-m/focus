package controller;

import dto.TaskDto;
import mapper.TaskMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import service.TaskService;

import java.util.List;

@RestController
@RequestMapping("tasks")
public class TaskController {
    @Autowired
    private TaskService taskService;

    TaskMapper taskMapper = new TaskMapper();

    @GetMapping
    // http://localhost:5000/tasks/
    public ResponseEntity<List<TaskDto>> getAllTasks() {

    }
}
