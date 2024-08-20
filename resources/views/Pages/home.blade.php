@extends('layouts.app')

@section('title', 'Home Page')

@section('content')
    @include('sections.hero')
    @include('sections.features')
    @include('sections.testimonials')
@endsection
