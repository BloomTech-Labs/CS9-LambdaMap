from django.test import TestCase
from django_app.models import Users,Clients,Hire_Partners

class UserTest(TestCase):

  def setUp(self):

    Users.objects.create(email='testEmail@test.com',password='testPassword',city="seattle",state="washington",personal_website='blah@google.com',phone='444-444-4444',about='test about', account_type=False, lat=0, lng=0)

    Clients.objects.create(email='testClient@test.com',password='testClient',first_name="first",last_name='last',profession='profession',remote=True,linkedin='linkedin@linkedin.com',github='github@github.com',twitter='twitter@twitter.com',codepen='codepen@codepen.com')

    Hire_Partners.objects.create(email='testPartner@test.com',password='testPartner',company_name="test company")


  def testUser(self):

    test1 = Users.objects.get(email='testEmail@test.com')
    self.assertEqual(test1.password,'testPassword')
    self.assertEqual(test1.city,'seattle')
    self.assertEqual(test1.state,'washington')
    self.assertEqual(test1.personal_website,'blah@google.com')
    self.assertEqual(test1.phone,'444-444-4444')
    self.assertEqual(test1.about,'test about')
    self.assertEqual(test1.account_type,False)
    self.assertEqual(test1.lat,'0')
    self.assertEqual(test1.lng,'0')

  def testClient(self):

    client = Clients.objects.get(email='testClient@test.com')
    self.assertEqual(client.first_name,'first')
    self.assertEqual(client.last_name,'last')
    self.assertEqual(client.profession,'profession')
    self.assertEqual(client.remote,True)
    self.assertEqual(client.linkedin,'linkedin@linkedin.com')
    self.assertEqual(client.github,'github@github.com')
    self.assertEqual(client.twitter,'twitter@twitter.com')
    self.assertEqual(client.codepen,'codepen@codepen.com')

  def testPartner(self):

    partner = Hire_Partners.objects.get(email='testPartner@test.com')
    self.assertEqual(partner.company_name,'test company')

