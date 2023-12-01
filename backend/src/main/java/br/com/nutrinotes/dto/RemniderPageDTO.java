package br.com.nutrinotes.dto;

import java.util.List;

public record RemniderPageDTO (List<ReminderDTO> reminder, long totalElements, int totalPage) {
	
}
 