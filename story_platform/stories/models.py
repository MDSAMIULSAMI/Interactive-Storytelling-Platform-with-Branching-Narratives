from django.db import models

class Story(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()

    def __str__(self):
        return self.title

class Branch(models.Model):
    story = models.ForeignKey(Story, related_name='branches', on_delete=models.CASCADE)
    text = models.TextField()
    option_text = models.CharField(max_length=255)
    next_branch = models.ForeignKey('self', null=True, blank=True, on_delete=models.SET_NULL, related_name='previous_branches')

    def __str__(self):
        return self.option_text