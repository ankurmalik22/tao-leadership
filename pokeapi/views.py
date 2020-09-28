from django.shortcuts import render

from django.http.response import JsonResponse
from rest_framework.parsers import JSONParser 
from rest_framework import status
 
from .models import Pokemon
from .serializers import PokemonSerializer
from rest_framework.decorators import api_view


@api_view(['GET', 'POST', 'DELETE'])
def pokemon_list(request):
    if request.method == 'GET':
        pokemons = Pokemon.objects.all().order_by('id')
        
        name = request.query_params.get('name', None)
        if name is not None:
            pokemons = pokemons.filter(name__icontains=name)
        
        pokemons_serializer = PokemonSerializer(pokemons, many=True)
        return JsonResponse(pokemons_serializer.data, safe=False)
 
    elif request.method == 'POST':
        pokemon_data = JSONParser().parse(request)
        pokemon_serializer = PokemonSerializer(data=pokemon_data)
        if pokemon_serializer.is_valid():
            pokemon_serializer.save()
            return JsonResponse(pokemon_serializer.data, status=status.HTTP_201_CREATED) 
        return JsonResponse(pokemon_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    elif request.method == 'DELETE':
        count = Pokemon.objects.all().delete()
        return JsonResponse({'message': '{} Pokemons were deleted successfully!'.format(count[0])}, status=status.HTTP_204_NO_CONTENT)
 
 
@api_view(['GET', 'PUT', 'DELETE'])
def pokemons_detail(request, pk):
    try: 
        pokemon = Pokemon.objects.get(pk=pk) 
    except Pokemon.DoesNotExist: 
        return JsonResponse({'message': 'The pokemon does not exist'}, status=status.HTTP_404_NOT_FOUND) 
 
    if request.method == 'GET': 
        pokemon_serializer = PokemonSerializer(pokemon) 
        return JsonResponse(pokemon_serializer.data) 
 
    elif request.method == 'PUT': 
        pokemon_data = JSONParser().parse(request) 
        pokemon_serializer = PokemonSerializer(pokemon, data=pokemon_data) 
        if pokemon_serializer.is_valid(): 
            pokemon_serializer.save() 
            return JsonResponse(pokemon_serializer.data) 
        return JsonResponse(pokemon_serializer.errors, status=status.HTTP_400_BAD_REQUEST) 
 
    elif request.method == 'DELETE': 
        pokemon.delete() 
        return JsonResponse({'message': 'pokemon was deleted successfully!'}, status=status.HTTP_204_NO_CONTENT)
    
        
@api_view(['GET'])
def pokemons_list_default(request):
    pokemon = Pokemon.objects.filter(is_default=True)
        
    if request.method == 'GET': 
        pokemons_serializer = PokemonSerializer(pokemon, many=True)
        return JsonResponse(pokemons_serializer.data, safe=False)