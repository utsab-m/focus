package dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class TaskDto {
    private Long id;
    private Boolean completed;
    private String name;
    private String description;
}
