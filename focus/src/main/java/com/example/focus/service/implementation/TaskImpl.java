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
    public TaskDto createTask(Task task) {
        Task savedTask = taskRepository.save(task);
        return TaskMapper.toDto(savedTask);
    }

    @Override
    public List<TaskDto> getAllTasks() {
        return taskRepository.findAll()
                .stream()
                .map(TaskMapper::toDto)
                .collect(Collectors.toList());
    }

    @Override
    public TaskDto getTaskById(Long id) {
        Task task = taskRepository.getReferenceById(id);
        return TaskMapper.toDto(task);
    }

    @Override
    public void updateTask(Task task) {
        taskRepository.save(task);
    }
//
//    @Override
//    public void deleteTask(Task task) {
//
//    }


}
