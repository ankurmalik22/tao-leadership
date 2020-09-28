from django.db import models

class Form(models.Model):
    name = models.CharField(max_length=100)
    url = models.URLField(max_length=250)

    def __str__(self):
        return self.name

class Ability(models.Model):
    name = models.CharField(max_length=100)
    url = models.URLField(max_length=250)

    def __str__(self):
        return self.name

class Type(models.Model):
    name = models.CharField(max_length=100)
    url = models.URLField(max_length=250)

    def __str__(self):
        return self.name

class Pokemon(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=250, blank=False, default='')
    base_experience = models.PositiveIntegerField(default=0)
    height = models.PositiveIntegerField(default=0)
    is_default = models.BooleanField(default=False)
    location_area_encounters = models.URLField(max_length=250, blank=False, default='')
    order = models.PositiveIntegerField(default=0)
    weight = models.PositiveIntegerField(default=0)
    # forms = models.ManyToManyField(Form)
    # abilities = models.ManyToManyField(Ability)
    # types = models.ManyToManyField(Type)

    def __str__(self):
        return self.name