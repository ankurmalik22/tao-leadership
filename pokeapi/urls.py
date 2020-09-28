from django.conf.urls import url 
from . import views 
 
urlpatterns = [ 
    url(r'^api/pokemons$', views.pokemon_list),
    url(r'^api/pokemons/(?P<pk>[0-9]+)$', views.pokemons_detail),
    url(r'^api/pokemons/default$', views.pokemons_list_default)
]