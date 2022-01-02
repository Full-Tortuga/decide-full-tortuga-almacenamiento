from django.test import TestCase
from .backups import *
from base.tests import BaseTestCase
# Create your tests here.
class TestBackups(BaseTestCase):
    def test_create_backups(self):
        response = self.client.post('/backups/create', "", format='json')
        self.assertEqual(response.status_code, 201)
        ls = os.listdir("./backups/backups")
        backup_test = ls[-1]
        os.system("rm -rf ./backups/backups/" + backup_test)
