from django.contrib import admin
from .models import Story, Branch

@admin.register(Story)
class StoryAdmin(admin.ModelAdmin):
    list_display = ('title',)

@admin.register(Branch)
class BranchAdmin(admin.ModelAdmin):
    list_display = ('story', 'option_text', 'next_branch')
    list_filter = ('story',)