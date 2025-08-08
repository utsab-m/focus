package mapper;

import dto.TaskDto;
import model.Task;

public class TaskMapper {
    public static TaskDto toDto(Task task) {
        TaskDto taskDto = new TaskDto();
        taskDto.setId(task.getId());
        taskDto.setCompleted(task.getCompleted());
        taskDto.setName(task.getName());
        taskDto.setDescription(task.getDescription());
        return taskDto;
    }

    public static Task toTask(TaskDto taskDto) {
        Task task = new Task();
        task.setId(taskDto.getId());
        task.setCompleted(taskDto.getCompleted());
        task.setName(taskDto.getName());
        task.setDescription(taskDto.getDescription());
        return task;
    }
}
