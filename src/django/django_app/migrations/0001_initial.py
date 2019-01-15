# Generated by Django 2.1 on 2018-09-11 23:41

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('contenttypes', '0002_remove_content_type_name'),
    ]

    operations = [
        migrations.CreateModel(
            name='Job_Listing',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('job_title', models.CharField(default='', max_length=30)),
                ('job_desc', models.TextField(default='')),
                ('job_link', models.URLField(blank=True, default='')),
                ('remote_job', models.BooleanField(default=False)),
                ('posted_time', models.DateTimeField(auto_now_add=True)),
            ],
        ),
        migrations.CreateModel(
            name='Session',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('key', models.CharField(default='', max_length=100)),
                ('object_id', models.PositiveIntegerField(default='')),
                ('content_type', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to='contenttypes.ContentType')),
            ],
        ),
        migrations.CreateModel(
            name='Users',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('email', models.EmailField(max_length=254, unique=True)),
                ('password', models.CharField(default='', max_length=20)),
                ('city', models.CharField(blank=True, default='', max_length=50)),
                ('state', models.CharField(blank=True, default='', max_length=50)),
                ('personal_website', models.URLField(blank=True, default='')),
                ('phone', models.CharField(blank=True, default='', max_length=50)),
                ('about', models.CharField(blank=True, default='', max_length=400)),
                ('account_type', models.BooleanField(default=False)),
                ('lat', models.CharField(blank=True, default='', max_length=50)),
                ('lng', models.CharField(blank=True, default='', max_length=50)),
                ('portfolio_picture', models.ImageField(blank=True, default='/media/images/defaultuser.png', upload_to='media/images/')),
            ],
        ),
        migrations.CreateModel(
            name='Clients',
            fields=[
                ('users_ptr', models.OneToOneField(auto_created=True, on_delete=django.db.models.deletion.CASCADE, parent_link=True, primary_key=True, serialize=False, to='django_app.Users')),
                ('first_name', models.CharField(default='', max_length=20)),
                ('last_name', models.CharField(default='', max_length=20)),
                ('profession', models.CharField(default='web developer', max_length=100)),
                ('remote', models.BooleanField(blank=True, default=False)),
                ('relocate', models.BooleanField(blank=True, default=False)),
                ('linkedin', models.URLField(blank=True, default='')),
                ('github', models.URLField(blank=True, default='')),
                ('twitter', models.URLField(blank=True, default='')),
                ('codepen', models.URLField(blank=True, default='')),
            ],
            bases=('django_app.users',),
        ),
        migrations.CreateModel(
            name='Hire_Partners',
            fields=[
                ('users_ptr', models.OneToOneField(auto_created=True, on_delete=django.db.models.deletion.CASCADE, parent_link=True, primary_key=True, serialize=False, to='django_app.Users')),
                ('company_name', models.CharField(blank=True, default='', max_length=50)),
            ],
            bases=('django_app.users',),
        ),
        migrations.AddField(
            model_name='job_listing',
            name='hp_id',
            field=models.ForeignKey(default='', on_delete=django.db.models.deletion.DO_NOTHING, to='django_app.Hire_Partners'),
        ),
    ]