package com.example.focus.mapper;

import com.example.focus.dto.TaskDto;
import com.example.focus.model.Task;

public class TaskMapper {
    public static TaskDto toDto(Task task) {
        return new TaskDto(
                task.getId(),
                task.getCompleted(),
                task.getName(),
                task.getDescription()
        );
    }

    public static Task toTask(TaskDto taskDto) {
        return new Task(
                taskDto.getId(),
                taskDto.getCompleted(),
                taskDto.getName(),
                taskDto.getDescription()
        );
    }
}
