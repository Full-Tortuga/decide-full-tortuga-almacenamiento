from django.test import TestCase
from .backups import *
from base.tests import BaseTestCase
# Create your tests here.
class TestBackups(BaseTestCase):
    def test_create_backups(self):
        run_backup("./backups/backups_test/")
        path = time.strftime("%d-%m-%Y")
        ls = os.listdir("./backups/backups_test/")
        cont = 0
        for i in ls:
            if path in i:
                cont += 1
        self.assertTrue(cont>0)
        os.system("rm -rf ./backups/backups_test")
