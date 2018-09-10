# Generated by Django 2.1 on 2018-09-07 18:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('django_app', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='clients',
            name='portfolio_picture',
        ),
        migrations.AddField(
            model_name='users',
            name='portfolio_picture',
            field=models.FileField(default='images/defaultuser.svg', upload_to='images/'),
        ),
    ]