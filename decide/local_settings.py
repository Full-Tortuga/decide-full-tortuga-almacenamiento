ALLOWED_HOSTS = ["*"]

# Modules in use, commented modules that you won't use
MODULES = [
    'authentication',
    'base',
    'booth',
    'census',
    'mixnet',
    'postproc',
    'store',
    'visualizer',
    'voting',
]

APIS = {
    'authentication': 'http://localhost:8000',
    'base': 'http://localhost:8000',
    'booth': 'http://localhost:8000',
    'census': 'http://localhost:8000',
    'mixnet': 'http://localhost:8000',
    'postproc': 'http://localhost:8000',
    'store': 'http://localhost:8000',
    'visualizer': 'http://localhost:8000',
    'voting': 'http://localhost:8000',
}

BASEURL = 'http://localhost:8000'

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'postgres',
        'USER': 'decide',
	'PASSWORD': 'practica',
        'HOST': '127.0.0.1',
        'PORT': '5432',
    },

    'cassandra': {
        'ENGINE': 'django_cassandra_engine',
        'NAME': 'decide',
        'USER': 'decide',
        'PASSWORD': 'decide',
        'TEST_NAME': 'test_db',

        'HOST': '127.0.0.1',
        'OPTIONS': {
            'replication': {
                'strategy_class': 'SimpleStrategy',
                'replication_factor': 1
            }
        }
    }
}

# number of bits for the key, all auths should use the same number of bits
KEYBITS = 256
