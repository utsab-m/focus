package com.example.focus.service.implementation;

import com.example.focus.dto.TaskDto;
import com.example.focus.exception.ResourceNotFoundException;
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
    public TaskDto updateTask(Long id, Task task) {
        Task existingTask = taskRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("No task exists with that ID"));
        existingTask.setCompleted(task.getCompleted());
        existingTask.setName(task.getName());
        existingTask.setDescription(task.getDescription());
        taskRepository.save(existingTask);
        return TaskMapper.toDto(existingTask);
    }

    @Override
    public TaskDto deleteTask(Long id) {
        Task task = taskRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("No task exists with that ID"));
        taskRepository.deleteById(id);
        return TaskMapper.toDto(task);
    }


}
