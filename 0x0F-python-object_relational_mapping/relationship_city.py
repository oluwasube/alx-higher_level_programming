#!/usr/bin/python3
"""define a city class and link to a database"""
from sqlalchemy import Column, Integer, String
from sqlalchemy import ForeignKey
from relationship_state import State, Base


class City(Base):
    """define City class inherit from Base"""
    __tablename__ = "cities"
    id = Column(Integer, primary_key=True)
    name = Column(String(128), nullable=False)
    state_id = Column(Integer, ForeignKey("states.id"), nullable=False)
