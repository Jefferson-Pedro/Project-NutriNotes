package br.com.nutrinotes.dto;

import java.util.List;

public record ReminderPageDTO (List<ReminderDTO> reminder, long totalElements, int totalPage) {
	
}
 