package com.example.focus.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "tasks")
public class Task {
    @Id
    @GeneratedValue
    private Long id;

    @Column(name = "completed", nullable=false)
    private Boolean completed = false;

    @Column(name = "name", nullable=false)
    private String name;

    @Column(name = "description", nullable=true)
    private String description;
}
