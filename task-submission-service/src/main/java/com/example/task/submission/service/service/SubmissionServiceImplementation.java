package com.example.task.submission.service.service;

import com.example.task.submission.service.modal.Submission;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class SubmissionServiceImplementation implements SubmissionService{
    @Override
    public Submission submitTask(Long taskId, String githubLink, Long userId) throws Exception {
        return null;
    }

    @Override
    public Submission getTaskSubmissionById(Long submissionId) throws Exception {
        return null;
    }

    @Override
    public List<Submission> getAllTaskSubmission() {
        return null;
    }

    @Override
    public List<Submission> getTaskSubmissionByTaskId(Long taskId) {
        return null;
    }

    @Override
    public Submission acceptDeclineSubmission(Long id, String status) throws Exception {
        return null;
    }
}
