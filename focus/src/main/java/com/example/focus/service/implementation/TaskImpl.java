package com.example.focus.service.implementation;

import com.example.focus.dto.TaskDto;
import lombok.AllArgsConstructor;
import com.example.focus.mapper.TaskMapper;
import com.example.focus.model.Task;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.focus.repository.TaskRepository;
import com.example.focus.service.TaskService;

import java.util.List;
import java.util.stream.Collectors;

@AllArgsConstructor
@Service
public class TaskImpl implements TaskService {
    @Autowired
    private TaskRepository taskRepository;

    @Override
    public Task createTask(Task task) {
        return taskRepository.save(task);
    }

    @Override
    public List<TaskDto> getAllTasks() {
        return taskRepository.findAll()
                .stream()
                .map(TaskMapper::toDto)
                .collect(Collectors.toList());
    }
//
//    @Override
//    public void editTask(Task task) {
//
//    }
//
//    @Override
//    public void deleteTask(Task task) {
//
//    }


}
