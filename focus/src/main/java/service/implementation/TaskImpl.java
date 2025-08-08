package service.implementation;

import model.Task;
import org.springframework.stereotype.Service;
import service.TaskService;

@Service
public class TaskImpl implements TaskService {
    public Task createTask(Task task) {
        return task;
    }
}
